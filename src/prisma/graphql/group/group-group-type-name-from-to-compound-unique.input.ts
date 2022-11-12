import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GroupType } from '../prisma/group-type.enum';

@InputType()
export class GroupGroupTypeNameFromToCompoundUniqueInput {

    @Field(() => GroupType, {nullable:false})
    groupType!: keyof typeof GroupType;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Date, {nullable:false})
    from!: Date | string;

    @Field(() => Date, {nullable:false})
    to!: Date | string;
}
