import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PhotoCreateWithoutHousesInput } from './photo-create-without-houses.input';
import { Type } from 'class-transformer';
import { PhotoCreateOrConnectWithoutHousesInput } from './photo-create-or-connect-without-houses.input';
import { PhotoWhereUniqueInput } from './photo-where-unique.input';

@InputType()
export class PhotoCreateNestedManyWithoutHousesInput {

    @Field(() => [PhotoCreateWithoutHousesInput], {nullable:true})
    @Type(() => PhotoCreateWithoutHousesInput)
    create?: Array<PhotoCreateWithoutHousesInput>;

    @Field(() => [PhotoCreateOrConnectWithoutHousesInput], {nullable:true})
    @Type(() => PhotoCreateOrConnectWithoutHousesInput)
    connectOrCreate?: Array<PhotoCreateOrConnectWithoutHousesInput>;

    @Field(() => [PhotoWhereUniqueInput], {nullable:true})
    @Type(() => PhotoWhereUniqueInput)
    connect?: Array<PhotoWhereUniqueInput>;
}
