import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PhotoCreateWithoutHomesInput } from './photo-create-without-homes.input';
import { Type } from 'class-transformer';
import { PhotoCreateOrConnectWithoutHomesInput } from './photo-create-or-connect-without-homes.input';
import { PhotoWhereUniqueInput } from './photo-where-unique.input';

@InputType()
export class PhotoUncheckedCreateNestedManyWithoutHomesInput {

    @Field(() => [PhotoCreateWithoutHomesInput], {nullable:true})
    @Type(() => PhotoCreateWithoutHomesInput)
    create?: Array<PhotoCreateWithoutHomesInput>;

    @Field(() => [PhotoCreateOrConnectWithoutHomesInput], {nullable:true})
    @Type(() => PhotoCreateOrConnectWithoutHomesInput)
    connectOrCreate?: Array<PhotoCreateOrConnectWithoutHomesInput>;

    @Field(() => [PhotoWhereUniqueInput], {nullable:true})
    @Type(() => PhotoWhereUniqueInput)
    connect?: Array<PhotoWhereUniqueInput>;
}
